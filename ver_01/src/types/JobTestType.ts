export interface JobTestType {
    id: number,
    attributes: {
        keyword: string,
        introduction: string,
        description: string,
        occupation: string,
        jlpt: string,
        must: string,
        want: string,
        location: string,
        working_hour: string,
        salary_min: string,
        salary_max: string,
        createdAt: string,
        updatedAt: string,
        company: {
            data: {
                id: number,
                attributes: {
                    name: string,
                    url: string,
                    feature: string,
                    benefit: string,
                    appointment: string,
                    rep: string,
                    email: string,
                    phone: string,
                    memo: string,
                    createdAt: string,
                    updatedAt: string
                }
            }
        }
    }
}