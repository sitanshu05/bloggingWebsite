import { ChangeEvent } from "react"

interface LabeledInputProps{
    label : string,
    placeholder : string,
    value : string,
    type? : string,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void
}
export const LabeledInput:React.FC<LabeledInputProps>= ({label, placeholder,value, onChange,type="text"}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black font-bold">{label}</label>
      <input className="border border-gray-300 rounded  px-4 py-2 mt-2" 
            onChange = {onChange} 
            type={type}
            value={value}
            name={label}
            placeholder={placeholder} />
    </div>
  )
}