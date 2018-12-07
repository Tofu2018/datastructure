#include <cstdlib>
#include <iostream>
#include <fstream>
#include <string>

#ifndef FRAME_INCLUDED
#define FRAME_INCLUDED

using namespace std;

void menu(register short re);
void function(register short mode);

struct node{

};

void menu(register short re){
    system("title Huffman MakeTree/Coder/Encoder-[Menu]");
    register short select = 0;
    if(re == 0)
    {
        cout << "[選單]" << endl;
        cout << "1.輸入建樹資料(Input Make Tree Data)-[file/analyze/sample.txt]" << endl
             << "2.建立霍夫曼樹(Make Huffman Tree)-[file/tree/huffmantree.txt]" << endl
             << "3.霍夫曼樹圖形(Huffman Tree Graphic)-[file/tree/huffmantreegraphic.txt]" <<endl
             << "4.霍夫曼編碼(Coder)" << endl
             << "5.霍夫曼解碼(Encoder)" << endl
             << "6.離開(Exit)" << endl;
    }
    cout << "輸入選擇項目代號:";
    cin >> select;
    cin.sync();
	switch(select){
		case 1 :
			//function(select);
			break;
		case 2 :
			//function(select);
			break;
		case 3 :
			//function(select);
			break;
		case 4 :
			//function(select);
			break;
		case 5 :
			//function(select);
            break;
		case 6 :
			exit(0);
			break;
		default :
            cout << "輸入錯誤!" << endl
                 << "請輸入數字(1-6)" << endl;
            re = re +1;
            cout << re <<endl;
            //system("pause");
            if(re>=3){
                re = 0;
                cout << re <<endl;
                system("cls");
                system("pause");
            }
            menu(re);
    }
};

void fuction(register short mode){
	// filename 開檔名稱 filenameI/O input/output
	string filenameI1 = "", filenameI2 = "", filenameO1 = "", filenameO2 = "";
	switch(mode){
		case 1 :
			system("title Huffman MakeTree/Coder/Encoder-[輸入建樹資料]");
			cout << "[輸入建樹資料]" << endl;
			filenameO1 = "file/analyze/sample.txt";
			break;
		case 2 :
			system("title Huffman MakeTree/Coder/Encoder-[建立霍夫曼樹]");
			cout << "[建立霍夫曼樹]" << endl;
			filenameI1 = "file/analyze/sample.txt";
			filenameO1 = "file/tree/huffman.txt";
			break;
		case 3 :
			system("title Huffman MakeTree/Coder/Encoder-[霍夫曼樹圖形]");
			cout << "[霍夫曼樹圖形]" << endl;
			filenameI1 = "file/tree/huffman.txt";
			filenameO1 = "file/tree/huffmantreegrahic";
			break;
		case 4 :
			system("title Huffman MakeTree/Coder/Encoder-[霍夫曼編碼]");
			cout << "[霍夫曼編碼]" << endl;
			filenameI1 = "file/tree/huffman.txt";
			filenameO1 = "file/input/original.txt";
			filenameO2 = "file/output/coder.txt";
			break;
		case 5 :
			system("title Huffman MakeTree/Coder/Encoder-[霍夫曼解碼]");
			cout << "[霍夫曼解碼]" << endl;
			filenameI1 = "file/tree/huffman.txt";
			filenameI2 = "file/output/coder";
			filenameO1 = "file/output/encoder";
			break;
		default:
			cout << "錯誤!" << endl;
			system("pause");
			exit(1);
	}

	register short select;
	string filemode;
	cout << "1.複寫檔案(並備份舊擋)" << endl
		 << "2.增加資料(保留原資料)" << endl;
	FMODE:
	cout << "請輸入選項:";
	cin >> select;
	cin.sync();
	if(select == 1){
		filemode = "ios::out";
		switch(mode){
			case 1 :
				system("copy file/analyze/sample.txt file/old/analyze/sample.txt");
				break;
			case 2 :
				system("copy file/tree/huffman.txt file/old/tree/huffman.txt");
				break;
			case 3 :
				system("copy file/tree/huffmantreegrahic.txt file/old/tree/huffmantreegrahic.txt");
				break;
			case 4 :
				system("copy file/input/original.txt file/old/input/original.txt");
				system("copy file/output/coder.txt file/old/output/coder.txt");
				break;
			case 5 :
				system("copy file/output/encoder file/old/output/encoder");
				break;
		default:
				cout << "錯誤!" << endl;
				system("pause");
				exit(1);
		}
	}else if(select == 2){
		filemode = "ios::app";
	}else{
		cout << "錯誤!" << endl
			 << "請重新輸入!" << endl;
		system("pause");
		system("cls");
		goto FMODE;
	}

	ofstream input1;
	ofstream input2;
	ifstream output1;
	ifstream output2;

	if(filenameI1 != ""){
		input1.open(filenameI1.c_str(),ios::in);
		if(input1.fail()){
			cout << "請先完成上一步驟" << endl;
			system("pause");
			menu(0);
		}
	}
	if(filenameI2 != ""){
		input2.open(filenameI2.c_str(),ios::in);
		if(input2.fail()){
			cout << "請先完成上一步驟" << endl;
			system("pause");
			menu(0);
		}
	}
	if(filenameO1 != ""){
		output1.open(filenameI1.c_str(),filemode);
		if(output1.fail()){
			cout << "尚未建立!(建立新檔)" << endl;
			system("pause");
			menu(0);
		}
	}
	if(filenameO2 != ""){
		output2.open(filenameI1.c_str(),filemode);
		if(output2.fail()){
			cout << "尚未建立!(建立新檔)" << endl;
			system("pause");
			menu(0);
		}
	}

	analyze.open(file/analyze/example.txt,ios::app);
	if(analyze.fail()){
		system("cd.> file/analyze/example.txt");
	}

	string a;
	while(cin >> a){
		if(a!='.'){
			cout << "End Input!!" << endl;
			return 0;
		}else{

		}
	}
	menu(0);
};

#endif // FRAME_INCLUDED
