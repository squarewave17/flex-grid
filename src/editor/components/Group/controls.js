import PropTypes from 'prop-types';
// import { I18N_DOMAIN } from '../../settings';

const { PanelBody, __experimentalToggleGroupControl, __experimentalToggleGroupControlOption } =
  wp.components;

const ToggleGroupControl = __experimentalToggleGroupControl;
const ToggleGroupControlOption = __experimentalToggleGroupControlOption;
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;

/**
 * Creates controls for the group side panel.
 *
 * @callback setter
 * @param {object} props Collection of properties required.
 * @param {string[]} props.attributes List of values.
 * @param {setter} props.setAttributes Function to update attributes on change.
 * @returns
 */
const Controls = ({ attributes, setAttributes }) => {
  const { display } = attributes;
  /**
   * Set The Display Type
   *
   * @param {string[]} display List of values.
   * @returns
   */
  const onChangeLayout = (newDisplay) => {
    setAttributes({ display: newDisplay });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Mode', 'flex-grid')}>
          <ToggleGroupControl
            label="Layout Type"
            isBlock="true"
            value={display}
            onChange={onChangeLayout}
          >
            <ToggleGroupControlOption value="flex" label="Flex">
              Flex
            </ToggleGroupControlOption>
            <ToggleGroupControlOption value="grid" label="Grid">
              Grid
            </ToggleGroupControlOption>
          </ToggleGroupControl>
        </PanelBody>
      </InspectorControls>
    </>
  );
};

Controls.propTypes = {
  attributes: PropTypes.object.isRequired,
  setAttributes: PropTypes.func.isRequired,
};

export default Controls;
