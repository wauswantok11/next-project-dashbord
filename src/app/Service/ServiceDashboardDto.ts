interface GraphData {
    user_active: {
        count_users_active_filtered_seven_days: number[];
        count_users_active_filtered_thirty_days: number[];
        count_users_active_filtered_ninety_days: number[];
    };
    new_business: {
        count_new_businesses_filtered_seven_days: number[];
        count_new_businesses_filtered_thirty_days: number[];
        count_new_businesses_filtered_ninety_days: number[];
    };
}

interface DataDTO {
    count_users: number;
    count_businesses: number;
    count_users_active: number;
    count_new_users: number;
    count_new_businesses: number;
    count_total_pre_register: number;
    count_new_pre_register: number;
    count_total_medical_pre_register: number;
    count_total_edu_student_pre_register: number;
    count_total_edu_teacher_pre_register: number;
    count_total_edu_officer_pre_register: number;
    count_total_time_attendance_pre_register: number;
    count_total_care_giver_pre_register: number;
    graph: GraphData;
}

export interface ResponseDashboardDTO {
    message: string;
    data?: DataDTO;
    error: null | string;
}
