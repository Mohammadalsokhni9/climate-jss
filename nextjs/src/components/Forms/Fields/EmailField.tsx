import { ChangeEvent } from "react";

const EmailField = function ({ props }: any): JSX.Element {
  const { onChange } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(props.field.valueField.name, e.target.value, props.isValid, [])
  }

  return (
    <div className="mb-10 w-full">
      <div className={`relative w-full float-label-input`}>
        <input
          id={props?.field?.model?.itemId}
          type="email"
          className="block text-gray-100 text-base w-full bg-transparent focus:outline-none focus:shadow-outline border-[3px] border-purple-100 py-5 px-5 appearance-none"
          value={props.value}
          onChange={handleChange}
          placeholder=""
        />
        <label
          htmlFor={props?.field?.model?.itemId}
          className={`origin-left rtl:origin-right absolute top-0 bottom-0 mt-[17px] h-fit start-3 text-gray-40 pointer-events-none transition-all duration-200 !bg-[#F7F6F6] px-2 `}
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

export default EmailField;