/* eslint-disable react/jsx-props-no-spreading */
const { InnerBlocks, useBlockProps } = wp.blockEditor;
/**
 * The edit component for an item that is added to the accordion group.
 *
 * @callback setter
 * @param {object} props Collection of properties required.
 * @param {string[]} props.attributes List of values.
 * @param {setter} props.setAttributes Function to update attributes on change.
 * @param {object} props.context Colour configurations for respective settings
 *  provided by parent block.
 * @param {string} props.clientId Id of the block being assigned.
 * @returns
 */
const Edit = () => {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps} className="test-item">
      <InnerBlocks renderAppender={InnerBlocks.ButtonBlockAppender} />
    </div>
  );
};
export default Edit;
