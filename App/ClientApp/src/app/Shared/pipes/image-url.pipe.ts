import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'imageUrl'
} )
export class ImageUrlPipe implements PipeTransform
{

  transform( path: string, w: number = 960, f: string = 'auto' ): string
  {
    return `https://static.nike.com/a/images/t_prod_ss/w_${ w },c_limit,f_${ f }/${ path }`;
  }

}
