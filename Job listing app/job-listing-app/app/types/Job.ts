



export default interface JobPostingProps{
    title:string,
    description:string,
    responsibilities:string[],
    ideal_candidate:{
        age:string,
        gender:string,
        traits:string[]
    },
    when_where:string,
    about:{
        posted_on:string,
        deadline:string,
        location:string,
        start_data:string,
        end_date:string,
        categories:string,
        required_skills:string[]
    },
    company:string,
    image:string
    id:string
}






