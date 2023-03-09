export const Video = () => {

    return(
        <section className="bg-biege">
          <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
              <h2 className="mb-2 text-4xl font-black tracking-tight text-gray-900">Grow fast - party hard</h2>
              <p>We all have the best intentions, but for us, that isn’t enough. To foster a diverse and inclusive culture, we’ve put a dedicated global Diversity, Inclusion & Belonging strategy into action. This is it.</p>
              <br />
              <div className="video-container"><iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/fOBrFP0WKfo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe></div>
            </div>
          </div>
        </section>
    )

}