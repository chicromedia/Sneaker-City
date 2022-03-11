import { IMainRoute } from "../../Shared/interfaces/routes";
import { getValue } from "@ngxs/store";

export class MenuItem
{
  public title!: string;
  public link!: string;

  constructor( props: Partial<MenuItem> = {} )
  {
    Object.assign( this, props );
  }

  static makeFrom( config: IMainRoute )
  {
    return new MenuItem( {
      ...config.data,
      link: getValue( config, 'data.link' ) || `/${ config.path }`
    } );
  }
}
