import GroupEdit from '../editor/components/Group/edit';
import ItemEdit from '../editor/components/Item/edit';
import groupMetadata from '../../inc/Group/block.json';
import itemMetadata from '../../inc/Item/block.json';

import '../editor/styles/editor-styles.scss';

const { registerBlockType } = wp.blocks;
const { InnerBlocks, useInnerBlocksProps } = wp.blockEditor;

wp.domReady(() => {
  registerBlockType(groupMetadata, {
    edit: GroupEdit,
    /**
     * The save action for the block.
     * @returns Rendered innerblock.
     */
    save() {
      const innerBlocksProps = useInnerBlocksProps.save();
      return { ...innerBlocksProps.children };
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
