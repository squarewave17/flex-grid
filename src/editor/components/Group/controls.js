import PropTypes from 'prop-types';
import { I18N_DOMAIN } from '../../settings';

const {
  PanelBody,
  PanelRow,
  Button,
  ButtonGroup,
  CheckboxControl,
  __experimentalVStack: VStack,
  __experimentalToggleGroupControl: ToggleGroupControl,
  __experimentalToggleGroupControlOption: ToggleGroupControlOption,
} = wp.components;

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
  const { display, flexDirection, flexDirectionReverse, alignItems } = attributes;

  /**
   * Function to check if button should be selected.
   * @param {string} value
   * @returns {boolean}
   */
  const checkSelect = (value, target) => value === target;

  /**
   * Set The Display Type
   *
   * @param {string[]} display
   * @returns
   */
  const onChangeLayout = (newDisplay) => {
    setAttributes({ display: newDisplay });
  };
  /**
   * Set The Flex Direction
   *
   * @param {string[]} newFlexDirection
   * @returns
   */
  const onChangeDirection = (newFlexDirection) => {
    setAttributes({ flexDirection: newFlexDirection });
  };
  /**
   * Set The Flex Direction Reverse Prop
   *
   * @param {boolean} onChangeDirectionRev
   * @returns
   */
  const onChangeDirectionRev = (newFlexDirectionReverse) => {
    setAttributes({ flexDirectionReverse: newFlexDirectionReverse });
  };
  /**
   * Set The align-items prop
   *
   * @param {string} display
   * @returns
   */
  const onChangeAlignItems = (newAlignItems) => {
    setAttributes({ alignItems: newAlignItems });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Mode', I18N_DOMAIN)}>
          <ToggleGroupControl
            label="Layout Type"
            isBlock="true"
            value={display}
            onChange={onChangeLayout}
          >
            <ToggleGroupControlOption value="flex" label="Flex" />
            <ToggleGroupControlOption value="inline-flex" label="Inline" />
            <ToggleGroupControlOption value="grid" label="Grid" />
          </ToggleGroupControl>
        </PanelBody>
        <PanelBody title={__('Container Settings', I18N_DOMAIN)}>
          <PanelRow>
            <VStack>
              <ToggleGroupControl
                label="Flex Direction"
                isBlock="true"
                value={flexDirection}
                onChange={onChangeDirection}
              >
                <ToggleGroupControlOption value="row" label="Row" />
                <ToggleGroupControlOption value="column" label="Column" />
              </ToggleGroupControl>
              <CheckboxControl
                label="Reverse"
                checked={flexDirectionReverse}
                onChange={onChangeDirectionRev}
              />
            </VStack>
          </PanelRow>
          <PanelRow label="Horizontal Alignment">
            <VStack>
              <p>Align Items</p>
              <ButtonGroup>
                <Button
                  icon="editor-justify"
                  isPressed={checkSelect('flex-start', alignItems)}
                  onClick={() => onChangeAlignItems('flex-start')}
                />
                <Button
                  icon="editor-justify"
                  isPressed={checkSelect('center', alignItems)}
                  onClick={() => onChangeAlignItems('center')}
                />
                <Button
                  icon="editor-justify"
                  isPressed={checkSelect('flex-end', alignItems)}
                  onClick={() => onChangeAlignItems('flex-end')}
                />
                <Button
                  icon="editor-justify"
                  isPressed={checkSelect('stretch', alignItems)}
                  onClick={() => onChangeAlignItems('stretch')}
                />
              </ButtonGroup>
              <p>Justify Content</p>
              <ButtonGroup>
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
              </ButtonGroup>
              <p>Align Content</p>
              <ButtonGroup>
                <Button icon="editor-justify" help="text" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
              </ButtonGroup>
              <p>Flex Wrap</p>
              <ButtonGroup>
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
                <Button icon="editor-justify" onClick={console.log('clicked')} />
              </ButtonGroup>
            </VStack>
          </PanelRow>
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
