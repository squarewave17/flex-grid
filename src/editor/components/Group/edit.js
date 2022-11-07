/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Controls from './controls';
import { NAMESPACE } from '../../settings';

const { InnerBlocks, useBlockProps } = wp.blockEditor;

/**
 * The edit component for a group that is used to wrap items.
 *
 * @callback setter
 * @param {object} props Collection of properties required.
 * @param {string[]} props.attributes List of values.
 * @param {setter} props.setAttributes Function to update attributes on change.
 * @returns
 */
const Edit = ({ attributes, setAttributes }) => {
  const { display } = attributes;
  const ALLOWED_BLOCKS = [`${NAMESPACE}-item`];
  const TEMPLATE = [[`${NAMESPACE}-item`]];
  const blockProps = useBlockProps();

  return (
    <>
      <Controls attributes={attributes} setAttributes={setAttributes} />
      <div {...blockProps} style={`display: ${display}`}>
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          template={TEMPLATE}
          renderAppender={InnerBlocks.ButtonBlockAppender}
        />
      </div>
    </>
  );
};

Edit.propTypes = {
  attributes: PropTypes.object.isRequired,
  setAttributes: PropTypes.func.isRequired,
  clientId: PropTypes.string.isRequired,
};

export default Edit;
