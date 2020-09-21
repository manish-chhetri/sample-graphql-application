const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        getChatData(
            sitecode: String!,
            ad_id: ID!,
            peer_id: ID!,
            user_id: ID!,
            question_categories_list: [String],
            pricing_categories_list: [String]
        ): chatResponseObj
    },
    type chatResponseObj {
        ad: Ad,
        user: User,
        questions: [Question],
        pricing: Pricing
    },
    type Ad {
        id: ID!,
        revision: Int,
        phone: String,
        has_phone_param: Boolean,
        created_at: String!,
        created_at_first: String!,
        republish_date: String!,
        valid_to: String!,
        title: String!,
        location_source: String,
        description: String!,
        category_id: String!,
        favorites: adFavoritesObj,
        status: adStatusObj,
        locations: [locationsObj],
        images: [adImageObj],
        user_id: String!,
        price: adPriceObj,
        parameters: [adParametersObj],
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
        anonymous: Boolean,
        avatar_id: String,
        badges: [userBadgesObj],
        created_at: String!,
        has_phone: Boolean!,
        images: [userImageObj],
        is_banned: String!,
        is_business: String!,
        is_phone_visible: String!,
        lang: String!,
        locations: locationsObj,
        name: String!,
        name_provided: Boolean,
        phone: String!,
        verification_status: String!
    },
    type Question {
        question_text: String,
        question_id: String,
        topic: String,
        subtopic: String,
        priority: String,
        related_ad_param: String,
        intent: [String],
        sub_topic_display: String,
        type: String,
        queried: Boolean,
        response: String
    },
    type Pricing {
        predicted_price: Int,
        min_price: Int,
        max_price: Int,
        offers_made: Int
    },
    type adPriceObj {
        key: String,
        key_name: String,
        value: adPriceValueObj
    },
    type adPriceValueObj {
        raw: String,
        display: String,
        currency: adPriceValueCurrencyObj
    },
    type adPriceValueCurrencyObj {
        pre: String,
        post: String,
        iso_4217: String,
        locale: String
    },
    type adStatusObj {
        status: String,
        link: String,
        message: String,
        allow_edit: String,
        display: String,
        translated_display: String,
        flags: adStatusFlagObj,
        ban_reason_id: String
    },
    type adStatusFlagObj {
        new: Boolean,
        hot: Boolean
    },
    type adImageObj {
        id: String,
        external_id: String,
        width: Int,
        height: Int,
        url: String,
        full: imageDetailObj,
        big: imageDetailObj,
        medium: imageDetailObj,
        small: imageDetailObj
    },
    type userImageObj {
        id: String,
        external_id: String,
        width: Int,
        height: Int,
        url: String,
        big: imageDetailObj,
        medium: imageDetailObj,
        background: imageDetailObj,
        small: imageDetailObj
    },
    type imageDetailObj {
        width: Int,
        height: Int,
        url: String
    },
    type adFavoritesObj {
        count: Int,
        count_label: String,
        count_label_next: String,
        count_label_prev: String
    },
    type userBadgesObj {
        name: String,
        status: String,
        type: String
    },
    type locationsObj {
        city_id: String,
        district_id: String,
        lat: Float,
        lon: Float,
        region_id: String,
        subregion_id: String
    },
    type adParametersObj {
        type: String,
        key: String,
        key_name: String,
        value: String,
        value_name: String,
        formatted_value: String,
    }`

module.exports = typeDefs