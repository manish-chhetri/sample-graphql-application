const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        getChatData(
            sitecode: String!,
            ad_id: ID!,
            peer_id: ID!,
            user_id: ID!,
            question_categories_list: [Int],
            pricing_categories_list: [Int]
        ): chatResponseObj
    },
    type chatResponseObj {
        ad: Ad,
        user: User
    },
    type Ad {
        id: ID!,
        revision: String,
        phone: String,
        has_phone_param: String,
        created_at: String!,
        created_at_first: String!,
        republish_date: String!,
        valid_to: String!,
        title: String!,
        location_source: String,
        description: String!,
        category_id: String!,
        favorites: String,
        status: String,
        locations: String,
        images: String!,
        user_id: String!,
        price: String,
        parameters: String!,
        views: String,
        replies: String,
        calls: String,
        monetizationInfo: String,
        main_info: String,
        partner_id: String,
        partner_code: String,
        inspection_info: String
    },
    type User {
        id: ID!,
        about: String,
        anonymous: String,
        avatar_id: String,
        badges: String,
        created_at: String!,
        has_phone: String!,
        images: String!,
        is_banned: String!,
        is_business: String!,
        is_phone_visible: String!,
        lang: String!,
        locations: String!,
        name: String!,
        name_provided: String!,
        phone: String!,
        verification_status: String!
    }`

module.exports = typeDefs