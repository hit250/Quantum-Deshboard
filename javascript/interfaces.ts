interface DataObject{

    "total_classes" : Number,
    "courses" : 
        {
            image: string,
            title: string,
            subject: string,
            grade: number,
            grade_change: number,
            units: number,
            lesson: number,
            topics: number,
            classes: string[],
            students: number,
            start_date: string,
            end_date: string,
            is_favourite: boolean,
            is_expired: boolean,
            is_grade_submission: boolean,
            is_manage_course: boolean,
        }[]

}


interface CoursesObject{
            thumbnail: string,
            title: string,
            subject: string,
            grade: number,
            grade_change: number,
            units: number,
            lesson: number,
            topics: number,
            classes: string[],
            students: number,
            start_date: string,
            end_date: string,
            is_favourite: boolean,
            is_expired: boolean,
            is_grade_submission: boolean,
            is_manage_course: boolean,
        }

export { DataObject, CoursesObject };
