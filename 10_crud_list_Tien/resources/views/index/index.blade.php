<!-- index de tao cac chuc nang them sua xoa -->

@extends('layout')

@section('content')
    @php

    @endphp
    <div class="container">
        <div class="card">
            <div class="card-header ">
                <div class="row ">
                    <div class="col-md-3">
                        <h3>人材管理</h3>
                    </div>
                    <div class="col-md-7">
                        <div class="form-control">
                            <form action="{{ route('student.index') }}" id="content" method="get">
                                @csrf
                                <div class="row">
                                    <div class="col-md-3">
                                        <strong class="text-dark">type</strong><br>
                                        <select name="type" class="form-select" id="seachSkills">

                                            <option value="name" @if (old('type', session('inserttype')) == 'name') selected @endif>名前
                                            </option>

                                            <option value="age" @if (old('type', session('inserttype')) == 'age') selected @endif>年齢
                                            </option>

                                            <option value="email" @if (old('type', session('inserttype')) == 'email') selected @endif>メール
                                            </option>

                                            <option value="phone"@if (old('type', session('inserttype')) == 'phone') selected @endif>電話
                                            </option>

                                            <option value="skill_se" @if (old('type', session('inserttype')) == 'skill_se') selected @endif>
                                                (言語)SkillSE</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <div>
                                            <strong></strong>
                                            <br>
                                            <input class="form-control" type="text" name="value" 
                                                placeholder="入力してください。" value="">
                                        </div>
                                        <br>
                                        {{-- @if ($type == 'skill_se') --}}
                                        <div id="skill_se_info">
                                            <label for="skill_se">SEスキル</label>
                                            <br>
                                            <select class="skill_se" name="value[]" id="skill_se"  multiple>
                                                @foreach ($skills as $skill)
                                                    <option value="{{ $skill->name }}">{{ $skill->name }}</option>
                                                @endforeach
                                            </select>
                                            {{-- code trong đây sẽ được ẩn điii --}}
                                        </div>
                                        {{-- @endif --}}
                                    </div>
                                    <input type="hidden" id="typeVal" value="{{$type}}">
                                    <br>

                                    <div class="col-md-3">
                                        <strong></strong><br>
                                        <button type="submit" class="search btn btn-primary" id="search-btn" style=""
                                            class="">検索</button>
                                        <a href="{{ route('student.index') }}" class="btn btn-primary float-end">ホーム</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-md-2">
                        <div class="">
                            <a href="{{ route('student.create') }}" class="btn btn-primary float-end">追加</a>
                        </div>
                        {{-- <div class="col-md-6">
                            <a href="{{ route('STUDENT.restore') }}" class="btn btn-primary float-end">Restore</a>
                        </div> --}}
                    </div>
                </div>
            </div>
            <div class="card-body">
                @if (Session::has('thongbao'))
                    <div class="alert alert-success">
                        {{ Session::get('thongbao') }}
                    </div>
                @endif
                @if (Session::has('thongbao2'))
                    <div class="alert alert-danger">
                        {{ Session::get('thongbao2') }}
                    </div>
                @endif
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>＃</th>
                            <th>名前（アルファベット、漢字とか））</th>
                            <th>氏名（カタカナ）</th>
                            <th>性別（男/女）</th>
                            <th>年齢</th>
                            <th>出身国</th>
                            <th>電話番号</th>
                            <th>メールアドレス</th>
                            <th>修正</th>

                        </tr>
                    </thead>
                    <tbody>
                        <!-- lay tu sv controller -->
                        @foreach ($student as $us)
                            <tr>
                                <td>{{ ++$i }}</td>
                                <td>{{ $us->name }}</td>
                                <td>{{ $us->name_kana }}</td>
                                <td>
                                    @php
                                        if ($us->sex === 0) {
                                            echo '不明';
                                        } elseif ($us->sex === 1) {
                                            echo '男';
                                        } else {
                                            echo '女';
                                        }
                                    @endphp
                                </td>
                                <td>{{ $us->age }}</td>
                                <td>{{ $us->country }}</td>
                                <td>{{ $us->phone }}</td>
                                <td>{{ $us->email }}</td>
                                <td>
                                    <form action="{{ route('student.destroy', $us->id) }}" method="POST">
                                        <a href="{{ route('student.show', $us->id) }}"
                                            class="btn btn-outline-secondary">全て</a>
                                        <a href="{{ route('student.edit', $us->id) }}"
                                            class="btn btn-outline-success">修正</a>
                                        @csrf
                                        @method('delete')
                                        <button type="submit" onclick="return confirm('削除しますか?');"
                                            class="btn btn-danger">削除</button>
                                    </form>

                                </td>

                            </tr>
                        @endforeach
    
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag/dist/js/multi-select-tag.js"></script>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>   

    <script>
        new MultiSelectTag('skill_se');
    </script>
    <script>
        $(document).ready(function() {
            // Ẩn input skill_se_info ban đầu
            $('#skill_se_info').hide();

            // Thêm sự kiện change cho dropdown type
            $('#seachSkills').change(function() {
                // Nếu giá trị được chọn là skill_se, hiển thị input skill_se_info và ẩn input value
                if ($(this).val() === 'skill_se') {
                    $('#skill_se_info').show();
                    $('input[name="value"]').hide();
                }
                // Ngược lại, ẩn input skill_se_info và hiển thị input value
                else {
                    $('#skill_se_info').hide();
                    $('input[name="value"]').show();
                }
            });
            function a() {
                var typeVal = $('#typeVal').val();
                if (typeVal === 'skill_se') {
                    $('#skill_se_info').show();
                    $('input[name="value"]').hide();
                }
                // Ngược lại, ẩn input skill_se_info và hiển thị input value
                else {
                    $('#skill_se_info').hide();
                    $('input[name="value"]').show();
                }
            }
            a();
        });
    </script>

{{-- <script>
        $(document).ready(function() {
            $("#seachSkills").change(function() {
                if ($(this).val() === "skill_se") {
                    $("#skill_se_info").show();
    
                    $.ajax({
                        url: '/skills',
                        type: 'GET',
                        dataType: 'json',
                        success: function(data) {
                            var options = '';
                            for (var i = 0; i < data.length; i++) {
                                options += '<option value="' + data[i].name + '">' + data[i].name + '</option>';
                            }
                            $('.skill_se').html(options);
                        }
                    });
                } else {
                    $("#skill_se_info").hide();
                }
            });
        });
    </script> --}}
    
@endsection
