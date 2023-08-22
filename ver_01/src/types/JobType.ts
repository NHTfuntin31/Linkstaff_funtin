export interface JobType {
    data : [
        {
            id: number,
            company: string,
            requirement: string,
            address: string,
            salary_from: string,
            salary_to: string,
            skill: string,
            description: string,
            createdAt: string,
            updatedAt: string
        }
    ],
    isFetching: boolean,
    isErr: boolean,
    arrJob: Array<number>
}