import { ChangeEvent } from "react";

const InputField = function ({ props }: any): JSX.Element {
  const { onChange } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(props.field.valueField.name, e.target.value, props.isValid, [])
  };

  return (
    <div className="mb-5">
      <div className={`relative w-full float-label-input`}>
        <input
          id={props?.field?.model?.itemId}
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={props.value}
          onChange={handleChange}
          placeholder=""
        />
        <label
          htmlFor={props?.field?.model?.itemId}
          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white `}
        >
          {props?.field?.model?.placeholderText}
        </label>
      </div>
      {props?.errors?.length > 0 && (
        <div className="mt-1.5 text-xs">
          {props?.errors?.map((item: any) => item)}
        </div>
      )}
    </div>
  )
};

export default InputField;

