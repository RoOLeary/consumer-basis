

export const TextVisual = () => {
    return(
        <section id="textVisual" className="relative bg-red">
          <div className="tvVisualContainer">
            <img className="h-full w-full object-cover" src="https://picnic.app/jobs/wp-content/uploads/sites/10/2022/08/cover-photo-min.jpg" alt="" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-white to-red-300 mix-blend-multiply"></div>
          </div>
          <div className="tvTextContainer">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-lg font-semibold text-white">Join our amazing crew today!</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Check out our job openings naar jou</p>
              <p className="mt-3 text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-white hover:bg-red-700">
                    Show me the jobs!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
