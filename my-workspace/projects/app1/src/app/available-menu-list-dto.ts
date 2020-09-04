export class AvailableMenuListDto {
  public propertyId: string;
  public availableMenuDto: AvailableMenuDto[];
}

export class AvailableMenuDto {
  public itemNo: number;
  public propertyId: string;
  public apiName: string;
}
