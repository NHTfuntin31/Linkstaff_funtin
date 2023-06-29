@extends('test')

@section('fuck')
<div class="row">
  <div class="col-md-8">
    @foreach ($lines as $sv)

   <a>{{$sv}}</a><br>

  @endforeach
  </div>
  <div class="col-md-4">
    <div class="form-group">
      <strong>氏名</strong>
      <input type="text" value="{{ $name }}" class="form-control">
    </div>
    <div class="form-group">
      <strong>氏名(フリガナ)</strong>
      <input type="text" value="{{ $namekata }}" class="form-control">
    </div>
    <div class="form-group">
        <strong>メール</strong>
        <input type="text" value="{{ $email }}" class="form-control">
    </div>
    <div class="form-group">
        <strong>住所</strong>
        <input type="text" value="{{ $address }}" class="form-control">
    </div>
    <div class="form-group">
        <strong>電話番号</strong>
        <input type="text" value="{{ $phone }}" class="form-control">
    </div>
  </div>
</div>
@endsection