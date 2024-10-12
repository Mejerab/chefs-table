

const Banner = () => {
    return (
        <div>
            <div className="bg-[url(https://i.ibb.co/dMJgxJw/banner.png)] bg-no-repeat bg-cover rounded-3xl mx-2 -pb-24 py-28">
                <div className="text-center text-white">
                    <h3 className="text-5xl font-bold pb-7">Discover an exceptional cooking <br />class tailored for you!</h3>
                    <p>Learn and Master Basic cooking and cook 500+ dishes <br /> to become an exceptionally well world-class Chef.</p>
                    <div className="mt-12">
                        <button className="btn bg-[#0BE58A] border-none rounded-full mr-3 px-7">Explore Now</button>
                        <button className="btn btn-outline rounded-full ml-3 px-7 border-white text-white">
                            Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;