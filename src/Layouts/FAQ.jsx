const FAQ = () => {
    return (
        <div className="my-12">
            <h2 className="text-4xl font-semibold text-center">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg text-center mt-3">The Painted Palette FAQ section offers answers to common inquiries about our artwork and services.<br />  Discover insights on customizations, shipping, and more in our comprehensive FAQ guide.</p>
            <div className="flex flex-col md:flex-row justify-between m-12 gap-4">
                <img src="https://i.ibb.co/C6PM8KZ/faqs-concept-illustration-114360-5185.jpg" alt="" className="md:h-96 md:w-auto border-2 border-solid rounded-xl"/>
                <div className="mr-12">
                    <div className="collapse collapse-plus bg-base-200 ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is the Painted Palette?
                        </div>
                        <div className="collapse-content">
                            <p>The Painted Palette is a curated collection of handcrafted paintings and artworks created by skilled artists. We specialize in offering a diverse range of artistic styles, including landscapes, portraits, watercolors, oils, sketches, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How can I purchase from the Painted Palette?
                        </div>
                        <div className="collapse-content">
                            <p>Purchasing from the Painted Palette is easy! Simply browse our online gallery, select the artwork you love, and proceed to checkout. We offer secure payment options and can ship worldwide.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Do you offer custom paintings or commissioned artworks?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we do offer custom paintings and commissioned artworks. If you have a specific idea or want a personalized piece, please reach out to us with your requirements. Our artists will work closely with you to bring your vision to life.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What are the shipping and processing times for orders?
                        </div>
                        <div className="collapse-content">
                            <p>Shipping and processing times vary depending on the artwork and its availability. Most in-stock items ship within a few business days, while made-to-order or customized pieces may require additional time. You can find specific details on each product page.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I return or exchange an artwork if I'm not satisfied?
                        </div>
                        <div className="collapse-content">
                            <p>We want you to be delighted with your purchase from the Painted Palette. If you are not satisfied with your artwork for any reason, please contact our customer service team within 30 days of receipt. We will assist you with returns or exchanges based on our policies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;