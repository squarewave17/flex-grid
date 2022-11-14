/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Controls from './controls';
import { NAMESPACE } from '../../settings';

const { useInnerBlocksProps, useBlockProps } = wp.blockEditor;

/**
 * The edit component for a group that is used to wrap items.
 *
 * @callback setter
 * @param {object} props Collection of properties required.
 * @param {string[]} props.attributes List of values.
 * @param {setter} props.setAttributes Function to update attributes on change.
 * @param {string} props.clientId Id of the block being assigned.
 * @returns
 */
const Edit = ({ attributes, setAttributes }) => {
  const { display, flexDirection, flexDirectionReverse, alignItems, justifyContent } = attributes;
  const ALLOWED_BLOCKS = [`${NAMESPACE}-item`];
  // const TEMPLATE = [[`${NAMESPACE}-item`]];
  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: [ALLOWED_BLOCKS],
  });

  const inlineStyles = {
    display,
    flexDirection: `${flexDirection}${flexDirectionReverse ? '-reverse' : ''}`,
    alignItems,
    justifyContent,
  };

  return (
    <>
      <Controls attributes={attributes} setAttributes={setAttributes} />
      <div {...innerBlocksProps} style={inlineStyles} />
    </>
  );
};

Edit.propTypes = {
  attributes: PropTypes.object.isRequired,
  setAttributes: PropTypes.func.isRequired,
  clientId: PropTypes.string.isRequired,
};

export default Edit;
