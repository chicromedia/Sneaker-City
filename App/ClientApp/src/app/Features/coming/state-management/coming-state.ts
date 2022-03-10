import { State } from "@ngxs/store";
import { ComingService } from "../services/coming.service";

interface IComingState
{

}

@State<IComingState>( {
  name: "coming"
} )
export class ComingState
{
  constructor( private service: ComingService ) {}
}
