import { Icon } from "@iconify/react/dist/iconify.js"

export default function Notes() {
    return (
        <section className="w-full rounded-2xl bg-slate-100 p-3 mb-3 relative">
            <h2 className="font-bold text-xl mb-3">Notes</h2>
            <div className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-300 duration-300 cursor-pointer"><Icon icon="material-symbols:edit-outline" className='text-3xl'/></div>
            <div className="flex flex-col gap-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel eum facilis ea dolores corrupti commodi nobis, ad distinctio a molestiae amet ducimus aspernatur quod perspiciatis, optio reprehenderit suscipit. Minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel eum facilis ea dolores corrupti commodi nobis, ad distinctio a molestiae amet ducimus aspernatur quod perspiciatis, optio reprehenderit suscipit. Minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel eum facilis ea dolores corrupti commodi nobis, ad distinctio a molestiae amet ducimus aspernatur quod perspiciatis, optio reprehenderit suscipit. Minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
        </section>
    )
}