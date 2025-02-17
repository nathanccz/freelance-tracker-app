import { useEffect } from "react"

export default function FAQs({ setActiveRoute }) {
    useEffect(() => {
        setActiveRoute('faqs')
    }, [])
    return (
        <main className='p-10 w-full'>
            <h1 class="text-3xl font-bold mb-4">Frequently Asked Questions (FAQs)</h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How do I get clients?</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How much do I charge for my projects?</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What happens if I get stuck on a project?</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Where can I find website templates?</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How do I handle a client who needs a custom design?</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How should I handle contracts?</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How do I accept payments?</div>
                <div className="collapse-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in totam pariatur officiis illo eos, similique neque temporibus itaque odio velit omnis laudantium nemo est eius voluptate quo unde repellat!</p>
                </div>
            </div>
        </main>
    )
}