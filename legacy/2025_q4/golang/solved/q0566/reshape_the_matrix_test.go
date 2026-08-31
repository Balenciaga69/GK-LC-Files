package q0566

import (
	"reflect"
	"testing"
)

func TestReshapeTheMatrix(t *testing.T) {
	// 定義一個結構體來儲存測試案例的輸入和預期輸出
	type args struct {
		mat [][]int
		r   int
		c   int
	}

	// 測試案例的集合
	tests := []struct {
		name string
		args args
		want [][]int
	}{
		{
			name: "Case 1: Success 2x2 to 1x4",
			args: args{
				mat: [][]int{{1, 2}, {3, 4}},
				r:   1,
				c:   4,
			},
			want: [][]int{{1, 2, 3, 4}},
		},
		{
			name: "Case 2: Failure 2x2 to 2x4 (size mismatch)",
			args: args{
				mat: [][]int{{1, 2}, {3, 4}},
				r:   2,
				c:   4,
			},
			want: [][]int{{1, 2}, {3, 4}}, // 預期輸出為原矩陣
		},
		{
			name: "Case 3: Success 1x4 to 4x1",
			args: args{
				mat: [][]int{{1, 2, 3, 4}},
				r:   4,
				c:   1,
			},
			want: [][]int{{1}, {2}, {3}, {4}},
		},
		{
			name: "Case 4: Empty Matrix",
			args: args{
				mat: [][]int{},
				r:   1,
				c:   1,
			},
			want: [][]int{}, // 預期輸出為空矩陣
		},
		{
			name: "Case 5: Success 3x2 to 2x3",
			args: args{
				mat: [][]int{{1, 2}, {3, 4}, {5, 6}},
				r:   2,
				c:   3,
			},
			want: [][]int{{1, 2, 3}, {4, 5, 6}},
		},
	}

	// 遍歷所有測試案例並執行測試
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// 呼叫您撰寫的 reshapeTheMatrix 函數
			got := matrixReshape(tt.args.mat, tt.args.r, tt.args.c)

			// 使用 reflect.DeepEqual 來比較兩個 [][]int 是否相等
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("matrixReshape() = %v, want %v", got, tt.want)
			}
		})
	}
}
