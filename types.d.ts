declare module 'i18n-js' {
    export interface I18n {
      fallbacks: boolean;
      translations: { en: { 
        Hello: string; 
        Delivering: string; 
        CurrentLocation: string; 
        PopularCategories: string; 
        Vegetarian: string; 
        PopularRestaurants: string; 
        SeeAll: string; 
        RecentOrders: string; 
        RecentlyAdded: string; 
        InviteFriends: string; 
        FreeCredit: string; 
        FreeDelivery: string; 
        Typesofrestaurants: string; 
        All: string; 
        PromoCode: string; 
        EnterPromoCode: string; 
        Apply: string; 
        General: string; 
        MyAccount: string; 
        Address: string; 
        Billing: string; 
        Settings: string; 
        Language: string; 
        DarkMode: string; 
        ChooseCategory: string; 
        Order: string; 
        For: string; 
        Checkout: string; 
        YourOrder: string; 
        AddProduct: string; 
        DeliveryAddress: string; 
        PaymentMethod: string; 
        ConfirmOrder: string; 
      }; 
      
      fr: { 
        Hello: string; 
        Delivering: string; 
        CurrentLocation: string; 
        PopularCategories: string; 
        Vegetarian: string; 
        PopularRestaurants: string; 
        SeeAll: string; 
        RecentOrders: string; 
        RecentlyAdded: string;
        InviteFriends: string; 
        FreeCredit: string; 
        FreeDelivery: string; 
        Typesofrestaurants: string; 
        All: string; 
        PromoCode: string; 
        EnterPromoCode: string; 
        Apply: string; 
        General: string; 
        MyAccount: string; 
        Address: string; 
        Billing: string; 
        Settings: string; 
        Language: string; 
        DarkMode: string; 
        ChooseCategory: string; 
        Order: string; 
        For: string; 
        Checkout: string; 
        YourOrder: string;
        AddProduct: string;
        DeliveryAddress: string;
        PaymentMethod: string; 
        ConfirmOrder: string; }; };
      locale: string;
      t(key: string, options?: any): string;
    }
    const i18n: I18n;
    export default i18n;
  }