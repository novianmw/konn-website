import SumbitButton from "./SumbitButton";

export default function Contact() {
    return <>
        <section id="contact"  className="flex justify-center items-center flex-col bg-orange-50 target:-scroll-m-5">
            <div className="mx-14 md:mt-32 mt-14 text-justify">
                <h1 className="text-3xl mb-5 font-bold">
                    Become a Client
                </h1>
                <p className=" text-xl mb-5">
                    Our clients get the best results when they have our team dedicated to their business for extended periods of time. This is why we are looking for ongoing collaboration where our professionals are like your team members who just happen to be remote. Ready to move forward?
                </p>
            </div>
            <div className="mx-14 md:mt-14 mt-5 md:w-[750px] w-[400px] text-justify">
                <form className="border border-slate-500 rounded-xl p-10" action="" method="post">
                    <div className="mb-5">
                        <label htmlFor="first name" className="mb-3 block text-base font-medium">
                            First Name
                        </label>
                        <input type="text" name="name" id="first name" placeholder="First Name" 
                        className="w-full rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="last name" className="mb-3 block text-base font-medium">
                            Last Name
                        </label>
                        <input type="text" name="last name" id="last name" placeholder="Last Name" 
                        className="w-full rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name" className="mb-3 block text-base font-medium">
                            Email
                        </label>
                        <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="" className="mb-3 block text-base font-medium">
                            How did you find KONN
                        </label>
                        <input type="text" name="text" id="text" placeholder="example : Instagram" className="w-full rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <SumbitButton/>
                    </div>
                </form>
            </div>
        </section>
    </>
}

{/* <div className="">
                <form>
                    <label>
                    Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
</div> */}

{/* <div className="flex flex-1 justify-center items-center">
<form action="flex flex-col my-5 max-w-[800px] ">
    <label htmlFor="">
        Full Name
    <input type="text" className="" />
    </label>
</form>
</div> */}