/**
 * Component list, register here to setting it in the form
 */
import {
  ElInput,
  ElSelect,
  ElOption,
  ElCheckboxGroup,
  ElCheckbox,
  ElRadioGroup,
  ElRadio,
  ElDatePicker,
} from "element-plus";
import ShCustom from "./component/sh-custom.vue";

const componentMap = {
  "el-input": ElInput,
  "el-select": ElSelect,
  "el-option": ElOption,
  "el-checkbox-group": ElCheckboxGroup,
  "el-checkbox": ElCheckbox,
  "el-radio-group": ElRadioGroup,
  "el-radio": ElRadio,
  "el-date-picker": ElDatePicker,
  "sh-custom": ShCustom,
};

export default componentMap;
