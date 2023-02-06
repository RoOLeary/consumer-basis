export const Perks = () => {
    return(
        <section className="bg-beige py-24">
          <div className="mx-auto">
            
            <div className="mx-auto max-w-6xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col text-center">
                  <img src="/assets/images/purpose.png" className="p-16" alt="Purpose Tile"/>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    
                    <h3 className="text-3xl font-black tracking-tight text-gray-900 text-left mb-4 text-center">Purpose</h3>  

                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto px-4">To accelerate a diverse culture where everyone belongs.</p>
                  </dd>
                </div>

                <div className="flex flex-col text-center">
                    <img src="/assets/images/autonomy.png" className="p-16" alt="Autonomy Tile" />
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <h3 className="text-3xl font-black tracking-tight text-gray-900 text-left mb-4 text-center">Autonomy</h3>  
                    
                    </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto px-4">Ensure our people reflect our customers and empower them to be their best.</p>
                  </dd>
                </div>

                <div className="flex flex-col text-center">
                    <img src="/assets/images/mastery.png" className="p-16" alt="Mastery Tile" /> 
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <h3 className="text-3xl font-black tracking-tight text-gray-900 text-left mb-4 text-center">Mastery</h3>  
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto px-4">This is needed so our people can be brilliant and our platform can be successful.</p>
                    </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
    )

}