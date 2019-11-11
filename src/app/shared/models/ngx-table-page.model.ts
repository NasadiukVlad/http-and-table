export class NgxTablePage {
  public count: number; // Total count of all rows
  public limit: number; // Page size to show
  public offset: number; // Current offset ( page - 1 ) shown.
                        // Default value: 0

  constructor(offset: number = 0) {
    this.offset = offset;
  }
}




