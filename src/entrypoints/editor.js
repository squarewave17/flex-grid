import GroupEdit from '../editor/components/Group/edit';
import ItemEdit from '../editor/components/Item/edit';
import groupMetadata from '../../inc/Group/block.json';
import itemMetadata from '../../inc/Item/block.json';

import '../editor/styles/editor-styles.scss';

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

wp.domReady(() => {
  registerBlockType(groupMetadata, {
    edit: GroupEdit,
    /**
     * The save action for the block.
     * @returns Rendered innerblock.
     */
    save() {
      return <InnerBlocks.Content />;
    },
    example: {
      attributes: {
        summaryBorderWidth: '1px',
      },
    },
  });

  registerBlockType(itemMetadata, {
    edit: ItemEdit,
    /**
     * The save action for the block.
     * @returns Rendered innerblock.
     */
    save() {
      return <InnerBlocks.Content />;
    },
  });
});
