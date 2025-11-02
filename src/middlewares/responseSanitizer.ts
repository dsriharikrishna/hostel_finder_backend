export function responseSanitizer<T extends object>(data: T, excludeFields: string[] = ['createdAt', 'updatedAt', 'password']): Partial<T> {
    const cleanData: Partial<T> = { ...data };
    for (const field of excludeFields) {
      delete (cleanData as any)[field];
    }
    return cleanData;
  }
  