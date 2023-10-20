function MapComponent() {
  return (
    <div className="my-4 w-full h-screen overflow-hidden">
    
    <iframe className="w-full h-full mx-auto"  src="https://analisis.datosabiertos.jcyl.es/explore/embed/dataset/incendios-forestales/custom/?disjunctive.provincia&disjunctive.situacion_actual&refine.provincia=%C3%81VILA&static=false&datasetcard=false"></iframe>
    </div>
  )
}

export default MapComponent