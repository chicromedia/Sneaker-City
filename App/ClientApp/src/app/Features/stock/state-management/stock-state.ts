import { State } from "@ngxs/store";
import { StockService } from "../services/stock.service";

interface IStockState
{

}

@State<IStockState>( {
  name: "stock"
} )
export class StockState
{
  constructor( private service: StockService ) {}
}
