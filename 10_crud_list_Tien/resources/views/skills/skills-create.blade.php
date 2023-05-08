@extends('layout')


@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Add Skill</h3>
                    </div>
                    <div class="col-md-6">
                        <a href="{{route('student.create')}}" class="btn btn-primary float-end">Back</a>
                        <a href="{{route('skill.index')}}" class="btn btn-primary float-lg-right ">Skill</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form action="{{route('skill.store') }}" method="POST">
                    @csrf
                    <div class="form-group">
                        <strong>Skill Name</strong>
                        <input type="text" name="name" class="form-control" autocomplete="off">
                        @error('name')
                            <span style="color: red; font-size: 20px;">{{ $message }}</span>
                        @enderror
                    </div><br>
                    <a href="{{ route('skill.index') }}" class="btn btn-secondary">キャンセル</a>
                    <button type="submit" class="btn btn-success">更新</button>
                </form>
            </div>
        </div>
    </div>
@endsection
