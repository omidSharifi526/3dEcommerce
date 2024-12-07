export interface ModuleState {
    modal: boolean; // وضعیت نمایش مدال
    mode: 'add' | 'edit' | null; // حالت مدال
    alertDialog: boolean; // وضعیت نمایش دیالوگ هشدار
    snackText: string; // متن پیام نمایش داده شده در snackbar
    asyncStatus: boolean; // وضعیت عملیات
    asyncOprationState: boolean; // وضعیت عملیات‌های ناهمزمان
  }