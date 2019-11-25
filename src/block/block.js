/**
 * BLOCK: ascii-tree
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

// Import React components for wp
const { PlainText, InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, ToggleControl } = wp.components;

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

// Default characters global so they can be accessed multiple times
const childCharDefault = '├── ';
const lastChildCharDefault = '└── ';
const indentWithLineCharDefault = '│   ';
const indentCharDefault = '    ';

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-ascii-tree', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'ascii-tree - CGB Block' ), // Block title.
	icon: 'category', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'ascii-tree — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
    content: {type: 'string'},
    childChar: {type: 'string', default: childCharDefault},
    lastChildChar: {type: 'string', default: lastChildCharDefault},
    indentWithLineChar: {type: 'string', default: indentWithLineCharDefault},
    indentChar: {type: 'string', default: indentCharDefault},
    showRoot: {type: 'boolean', default: false}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-ascii-tree'></p>.
		function updateContent(eventContent){
			props.setAttributes({content: eventContent})
    }

    // Handle keypress and intercept tabs
    function handleKeypress(event){
      //event.target.style.cssText = "height:" + event.target.scrollHeight + "px";
      if(event.keyCode==9 || event.which==9) {
        event.preventDefault();
        let s = event.target.selectionStart;
        event.target.value = event.target.value.substring(0,s) + "    " + event.target.value.substring(s);
        event.target.selectionEnd = s+4;
      } 
    }

    // Handle changes to child character
    function updateChildChar(eventContent) {
      props.setAttributes({childChar: eventContent});
    }

    // Check if the user left the field empty
    function validateChildChar(event) {
      if ( props.attributes.childChar == '' ) {
        props.setAttributes({childChar: childCharDefault});
      }
    }

    // Handle changes to last child character
    function updateLastChildChar(eventContent) {
      props.setAttributes({lastChildChar: eventContent});
    }

    // Check if the user left the field empty
    function validateLastChildChar(event) {
      if ( props.attributes.lastChildChar == '' ) {
        props.setAttributes({lastChildChar: lastChildCharDefault});
      }
    }

    // Handle changes to indent with line character
    function updateIndentWithLineChar(eventContent) {
      props.setAttributes({indentWithLineChar: eventContent});
    }

    // Check if the user left the field empty
    function validateIndentWithLineChar(event) {
      if ( props.attributes.indentWithLineChar == '' ) {
        props.setAttributes({indentWithLineChar: indentWithLineCharDefault});
      }
    }

    // Handle changes to child character
    function updateIndentChar(eventContent) {
      props.setAttributes({indentChar: eventContent});
    }

    // Check if the user left the field empty
    function validateIndentChar(event) {
      if ( props.attributes.indentChar == '' ) {
        props.setAttributes({indentChar: indentCharDefault});
      }
    }

    // Update show root toggle
    function updateShowRoot(eventContent) {
      props.setAttributes({showRoot: eventContent});
    }
    

		return (
      <div>
        <InspectorControls>
          <PanelBody title={ __('Character Settings')}>
            <TextControl label="Child" value={props.attributes.childChar} onChange={updateChildChar} onBlur={validateChildChar}/>
            <TextControl label="Last Child" value={props.attributes.lastChildChar} onChange={updateLastChildChar} onBlur={validateLastChildChar}/>
            <TextControl label="Indent with Line" value={props.attributes.indentWithLineChar} onChange={updateIndentWithLineChar} onBlur={validateIndentWithLineChar}/>
            <TextControl label="Indent" value={props.attributes.indentChar} onChange={updateIndentChar} onBlur={validateIndentChar}/>
            <ToggleControl label="Add Root Prefix" checked={props.attributes.showRoot} onChange={updateShowRoot}/>
          </PanelBody>
        </InspectorControls>

        <PlainText
          onChange={updateContent}
          onKeyDown={handleKeypress}
          className={ props.className }
          placeholder="Type tree here"
          keepPlaceholderOnFocus={true}
          value={props.attributes.content}
        />
      </div>      
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		return (
      <pre className={ props.className }>
        <code>
          {generate(props.attributes)}
        </code>
      </pre>
		);
	},
} );


/*
The following section is for custom functions needed for this block. Due to Javascript function hoisting,
these will be defined in the global scope and avaialble in the edit and save functions above.

The code used here is largely copied from the ascii-tree plugin for atom see here: https://github.com/ramtinsoltani/atom-ascii-tree
*/
function generate(attributes) {
  let selection = attributes.content;

  if ( ! selection || ! selection.trim() ) return;

  let characters = {
    child: attributes.childChar,
    lastChild: attributes.lastChildChar,
    indentWithLine: attributes.indentWithLineChar,
    indent: attributes.indentChar
  };
  
  let showRoot = attributes.showRoot;

	let object = parseToObject(selection);	

  let generated = [];

  buildLinesFromObject(object, generated, characters, showRoot);

  return generated.join('\n');

}

function parseToObject(selection) {
	let object = {};
  let lastParents = []; // To keep track of the last parents known on each level
  
  let text = selection
                .replace(/\r\n/g, '\n')
                .replace(/\n+/g, '\n')
                .replace(/^\n/, '')
                .replace(/\n$/, '')
                .split('\n');

  // Read each line
  text.forEach((line, index) => {

    // If line is root (multiple roots are valid)
    if ( line.trim().substr(0, 3) !== '+--' ) {

      object[index + ':' + line.trim()] = {};
      lastParents[0] = index + ':' + line.trim();

    }
    else {

      let currentLevel = (line.indexOf('+--') / 4) + 1;
      let currentNode = index + ':' + line.replace('+--', '').trim();
      let parentIndex = currentLevel - 1;
      let ref = object;

      // Add the current node to the right parent
      for ( let lastParentIndex in lastParents ) {

        ref = ref[lastParents[lastParentIndex]];

        // If parent reached (note that lastParentIndex is a string)
        if ( lastParentIndex == parentIndex ) {

          if ( ! ref ) return;

          ref[currentNode] = {};

          break;

        }

      }

      // Determine if current node is a parent itself
      if ( text[index + 1] ) {

        let possibleParentIndicator = text[index + 1].substr(line.indexOf('+--') + 4, 3);

        if ( possibleParentIndicator === '+--' ) lastParents[currentLevel] = currentNode;

      }

    }

  });

  return object;
}

function buildLinesFromObject(object, generated, characters, showRoot, prefix, level) {
	// Default values
  prefix = prefix || '';
	level = level || 0;

  let nodes = Object.keys(object);

  for ( let index in nodes ) {

    let lastChild = ! nodes[parseInt(index) + 1];

    // Generate a new line with current node prefixed
    generated.push(prefix +
      (! level && showRoot ? '.' : '') +
      (level ? (lastChild ? characters.lastChild : characters.child) : '') +
      nodes[index].replace(/^\d+:/, ''));

    let children = Object.keys(object[nodes[index]]);

    if ( children.length ) {

      let childPrefix = '';

      // If current node is the last child, prefix it's children differently
      if ( level ) {

        childPrefix += lastChild ?
                        prefix + characters.indent :
                        prefix + characters.indentWithLine;
      }

      // Generate lines from child
      buildLinesFromObject(object[nodes[index]], generated, characters, showRoot, childPrefix, level + 1);

    }

  }

}

/*

  __reverseGeneratedTree(selection, characters) {

    let lines = selection
                 .replace(/\r\n/g, '\n')
                 .replace(/\n+/g, '\n')
                 .replace(/^\n/, '')
                 .replace(/\n$/, '')
                 .split('\n');

    let indentRegex = new RegExp(characters.indent, 'g');
    let indentWithLineRegex = new RegExp(characters.indentWithLine, 'g');

    lines.forEach((line, index) => {

      if ( line.indexOf(characters.child) !== -1 || line.indexOf(characters.lastChild) !== -1 ) {

        lines[index] = line
                 .replace(characters.child, '+-- ')
                 .replace(characters.lastChild, '+-- ')
                 .replace(indentRegex, '    ')
                 .replace(indentWithLineRegex, '    ');

      }
      else if ( atom.config.get('ascii-tree.characters.rootPrefix') ) {

        lines[index] = line.replace(/^\./, '');

      }

    });

    return lines.join('\n');

  },

  __interpretAsObject(selection) {

    

  },

  __buildLinesFromObject(object, generated, characters, prefix, level) {

    

  }

};
*/