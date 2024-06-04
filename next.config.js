const {PHASE_DEVELOPMENT_SERVER} =require('next/constants')

module.exports = (phase) => {
   if(phase === PHASE_DEVELOPMENT_SERVER){
    return{
        env :{
            mongodb_username:"Dhanasri",
            mongodb_password:"Dhana%4011",
            mongodb_clustername:"cluster-17",
            mongodb_database:"my-site-dev"
        }
     }
   };

return{
    env :{
        mongodb_username:"Dhanasri",
        mongodb_password:"Dhana%4011",
        mongodb_clustername:"cluster-17",
        mongodb_database:"my-site"
    }
  }
}