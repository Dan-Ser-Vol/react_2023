

const cars = '/cars'

const urls = {
  carsAPI: {
      cars,
      byId: (id:number):string => `${cars}/${id}`
  }
}


export {urls}