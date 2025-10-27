export interface LoginDto {
    email: string
    password: string
}

export interface RegisterDto {
    email: string
    password: string
    name: string
}

export interface LoginResponse {
    accessToken: string
    refreshToken?: string
    user: {
        id: string
        name: string
        email: string
    }
}
