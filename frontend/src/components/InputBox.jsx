export function InputBox({label, placeholder, onChange}) {
    return <div>
        <div className="text-sm text-left py-2 font-medium">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} onchange={onchange} className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>

}