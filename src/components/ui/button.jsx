
export function Button({children,...props}){
return(
<button className="px-4 py-2 border rounded-xl hover:bg-green-500 hover:text-black transition" {...props}>
{children}
</button>
)}
