import { State } from "@ngxs/store";
import { FeedService } from "../services/feed.service";

interface IFeedState
{

}

@State<IFeedState>( {
  name: "feed"
} )
export class FeedState
{
  constructor( private service: FeedService ) {}
}
