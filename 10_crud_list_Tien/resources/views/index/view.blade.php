@extends('layout')

@section('content')
    @php
        $testfunctions;
        
        function test2($testfunctions)
        {
            if ($testfunctions === 0) {
                echo '不合格';
            } elseif ($testfunctions === 1) {
                echo '合格';
            } elseif ($testfunctions === 2) {
                echo '未定';
            } else {
                echo '';
            }
        }
        
        function test($testfunctions)
        {
            if ($testfunctions == 1) {
                echo 'N1';
            } elseif ($testfunctions == 2) {
                echo 'N2';
            } elseif ($testfunctions == 3) {
                echo 'N3';
            } elseif ($testfunctions == 4) {
                echo 'N4';
            } elseif ($testfunctions == 5) {
                echo 'N5';
            } else {
                echo '';
            }
        }
    @endphp
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6">
                        <h3>人材-infomation</h3>

                        <div class="col-md-6">
                            <div>
                                <strong style="font-size: 20px">氏名:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->name }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">氏名（カタカナ）:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->name_kana }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">性別:</strong>
                                <pre style="display: inline; font-size: 20px;">  @php
                                    if ($student->sex === 0) {
                                        echo '不明';
                                    } elseif ($student->sex === 1) {
                                        echo '男';
                                    } else {
                                        echo '女';
                                    }
                                @endphp</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">生年月日:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->birthday }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">年齢:</strong>
                                @if ($student->age == 0)
                                    <span style="font-size: 20px"></span>
                                @else
                                    <span style="font-size: 20px">{{ $student->age }}歳</span>
                                @endif
                            </div>
    
                            <div>
                                <strong style="font-size: 20px">出身国:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->country }}</pre>
                            </div>
                            <div class="form-control">
                                <strong style="font-size: 25px">1次面接</strong>
                                <div>
                                    <strong style="font-size: 20px">実施日:</strong>
                                    <pre style="display: inline; font-size: 20px;">  {{ $student->first_interv_date }}</pre>
                                </div>
                                <div>
                                    <strong style="font-size: 20px">対応者名:</strong>
                                    <pre style="display: inline; font-size: 20px;">  {{ $student->first_interv_staff }}</pre>
                                </div>
                                <div>
                                    <strong style="font-size: 20px">合否:</strong>
                                    <pre style="display: inline; font-size: 20px;">  @php
                                        test2($student->first_interv_result);
                                    @endphp</pre>
                                </div>
                            </div>
    
                            <div class="form-control">
                                <strong style="font-size: 25px">2次面接</strong>
                                <div>
                                    <strong style="font-size: 20px">実施日:</strong>
                                    <pre style="display: inline; font-size: 20px;">  {{ $student->sec_interv_date }}</pre>
                                </div>
                                <div>
                                    <strong style="font-size: 20px">対応者名:</strong>
                                    <pre style="display: inline; font-size: 20px;">  {{ $student->sec_interv_staff }}</pre>
                                </div>
                                <div>
                                    <strong style="font-size: 20px">合否:</strong>
                                    <pre style="display: inline; font-size: 20px;">  @php
                                        test2($student->sec_interv_result);
                                    @endphp</pre>
                                </div>
                            </div>
    
                            <div class="form-control">
                                <strong style="font-size: 25px">インターン</strong>
                                <div>
                                    <strong style="font-size: 20px">入職日:</strong>
                                    <pre style="display: inline; font-size: 20px;">  {{ $student->hire_date }}</pre>
                                </div>
                                <div>
                                    <strong style="font-size: 20px">対応部署名:</strong>
                                    <pre style="display: inline; font-size: 20px;">  {{ $student->intern_department }}</pre>
                                </div>
                                <div>
                                    <strong style="font-size: 20px">合否:</strong>
                                    <pre style="display: inline; font-size: 20px;">  @php
                                        test2($student->intern_result);
                                    @endphp</pre>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div class="col-md-6">
                        <a href="{{ route('student.index') }}" class="btn btn-primary float-end">Back</a>

                        <div class="col-md-6">
                            <div>
                                <strong style="font-size: 20px">電話番号:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->phone }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">メールアドレス:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->email }}</pre>
                            </div>
    
                            <div>
                                <strong style="font-size: 20px">日本語(JLPT)スキル:</strong>
                                <pre style="display: inline; font-size: 20px;">  @php
                                    test($student->skill_jlpt);
                                @endphp</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">ヒアリングスキル:</strong>
                                <pre style="display: inline; font-size: 20px;">  @php
                                    test($student->skill_hearing);
                                @endphp</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">スピーキングスキル:</strong>
                                <pre style="display: inline; font-size: 20px;">  @php
                                    test($student->skill_speaking);
                                @endphp</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">リーディングスキル:</strong>
                                <pre style="display: inline; font-size: 20px;">  @php
                                    test($student->skill_reading);
                                @endphp</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">SEスキル:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->skill_se }}</pre>
                            </div>
                            <strong style="font-size: 25px">学歴</strong><br>
                            <div>
                                <strong style="font-size: 20px">4大:</strong>
                                <pre style="display: inline; font-size: 20px;">  @php
                                    if ($student->graduate_4 == 1) {
                                        echo '〇';
                                    } else {
                                        echo '✕';
                                    }
                                @endphp</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">専門:</strong>
                                <pre style="display: inline; font-size: 20px;">  @php
                                    if ($student->graduate_2 == 1) {
                                        echo '〇';
                                    } else {
                                        echo '✕';
                                    }
                                @endphp</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">最終学歴:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->graduate_school }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">応募職種:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->apply_department }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">希望勤務地:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->working_place }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">現在の状況:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->current_status }}</pre>
                            </div>
                            <div>
                                <strong style="font-size: 20px">自由項目:</strong>
                                <pre style="display: inline; font-size: 20px;">  {{ $student->note }}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
