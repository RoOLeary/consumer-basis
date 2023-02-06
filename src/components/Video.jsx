export const Video = () => {

    return(
        <section className="bg-white">
          <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
              <h2 className="mb-2 text-4xl font-black tracking-tight text-gray-900">Video CTA.<br />Start using our app today.</h2>
              <br />
              <div className="video-container"><iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/fOBrFP0WKfo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe></div>
            </div>
          </div>
        </section>
    )

}