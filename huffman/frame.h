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
        cout << "[���]" << endl;
        cout << "1.��J�ؾ���(Input Make Tree Data)-[file/analyze/sample.txt]" << endl
             << "2.�إ��N�ҰҾ�(Make Huffman Tree)-[file/tree/huffmantree.txt]" << endl
             << "3.�N�ҰҾ�ϧ�(Huffman Tree Graphic)-[file/tree/huffmantreegraphic.txt]" <<endl
             << "4.�N�Ұҽs�X(Coder)" << endl
             << "5.�N�ҰҸѽX(Encoder)" << endl
             << "6.���}(Exit)" << endl;
    }
    cout << "��J��ܶ��إN��:";
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
            cout << "��J���~!" << endl
                 << "�п�J�Ʀr(1-6)" << endl;
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
	// filename �}�ɦW�� filenameI/O input/output
	string filenameI1 = "", filenameI2 = "", filenameO1 = "", filenameO2 = "";
	switch(mode){
		case 1 :
			system("title Huffman MakeTree/Coder/Encoder-[��J�ؾ���]");
			cout << "[��J�ؾ���]" << endl;
			filenameO1 = "file/analyze/sample.txt";
			break;
		case 2 :
			system("title Huffman MakeTree/Coder/Encoder-[�إ��N�ҰҾ�]");
			cout << "[�إ��N�ҰҾ�]" << endl;
			filenameI1 = "file/analyze/sample.txt";
			filenameO1 = "file/tree/huffman.txt";
			break;
		case 3 :
			system("title Huffman MakeTree/Coder/Encoder-[�N�ҰҾ�ϧ�]");
			cout << "[�N�ҰҾ�ϧ�]" << endl;
			filenameI1 = "file/tree/huffman.txt";
			filenameO1 = "file/tree/huffmantreegrahic";
			break;
		case 4 :
			system("title Huffman MakeTree/Coder/Encoder-[�N�Ұҽs�X]");
			cout << "[�N�Ұҽs�X]" << endl;
			filenameI1 = "file/tree/huffman.txt";
			filenameO1 = "file/input/original.txt";
			filenameO2 = "file/output/coder.txt";
			break;
		case 5 :
			system("title Huffman MakeTree/Coder/Encoder-[�N�ҰҸѽX]");
			cout << "[�N�ҰҸѽX]" << endl;
			filenameI1 = "file/tree/huffman.txt";
			filenameI2 = "file/output/coder";
			filenameO1 = "file/output/encoder";
			break;
		default:
			cout << "���~!" << endl;
			system("pause");
			exit(1);
	}

	register short select;
	string filemode;
	cout << "1.�Ƽg�ɮ�(�óƥ��¾�)" << endl
		 << "2.�W�[���(�O�d����)" << endl;
	FMODE:
	cout << "�п�J�ﶵ:";
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
				cout << "���~!" << endl;
				system("pause");
				exit(1);
		}
	}else if(select == 2){
		filemode = "ios::app";
	}else{
		cout << "���~!" << endl
			 << "�Э��s��J!" << endl;
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
			cout << "�Х������W�@�B�J" << endl;
			system("pause");
			menu(0);
		}
	}
	if(filenameI2 != ""){
		input2.open(filenameI2.c_str(),ios::in);
		if(input2.fail()){
			cout << "�Х������W�@�B�J" << endl;
			system("pause");
			menu(0);
		}
	}
	if(filenameO1 != ""){
		output1.open(filenameI1.c_str(),filemode);
		if(output1.fail()){
			cout << "�|���إ�!(�إ߷s��)" << endl;
			system("pause");
			menu(0);
		}
	}
	if(filenameO2 != ""){
		output2.open(filenameI1.c_str(),filemode);
		if(output2.fail()){
			cout << "�|���إ�!(�إ߷s��)" << endl;
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
