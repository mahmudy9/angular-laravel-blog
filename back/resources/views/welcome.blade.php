<ul>
@foreach($images as $image)
<li>
<img src="{{asset('storage/'.$image->image)}}" />
</li>
@endforeach
</ul>