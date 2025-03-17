import classNames from "classnames";
import { Form, Pagination } from "react-bootstrap";
import { useQueryParams } from "~/hooks";

const DynaPagination = ({
  pagination,
  firstLastVisible = false,
  size,
  sizePerPageList,
  classNameContainer,
  classNamePagination,
  classNameSizePerPageList = "d-flex align-items-center gap-2",
}: {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount?: number;
    pageSize?: number;
  };
  firstLastVisible?: boolean;
  size?: "sm" | "lg";
  sizePerPageList?: {
    text: string;
    value: number;
  }[];
  classNameContainer?: string;
  classNamePagination?: string;
  classNameSizePerPageList?: string;
}) => {
  const [page, setPage] = useQueryParams("page");
  const [pageSize, setPageSize] = useQueryParams("pageSize");

  const getVisiblePages = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
    if (totalPages < 7) {
      return [...Array(totalPages)].map((_, key) => key + 1);
    } else {
      if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 3 < totalPages) {
        return [1, null, currentPage - 1, currentPage, currentPage + 1, null, totalPages];
      } else if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 3 >= totalPages) {
        return [1, null, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        return [1, 2, 3, 4, 5, null, totalPages];
      }
    }
  };

  const pageNumbers = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
    const pages = getVisiblePages({ currentPage, totalPages });

    return pages?.map((page: any, key: number) =>
      page == null ? (
        <Pagination.Ellipsis linkClassName="bg-transparent border-0" key={key} disabled />
      ) : (
        <Pagination.Item
          linkClassName="shadow-none"
          key={key}
          onClick={() => page != currentPage && setPage(page)}
          active={page == currentPage}
        >
          {page}
        </Pagination.Item>
      ),
    );
  };

  return (
    (Array.isArray(sizePerPageList) || pagination?.totalPages) && (
      <div
        className={classNames(
          "d-flex align-items-center justify-content-between flex-column-reverse flex-lg-row gap-3 m-3",
          classNameContainer,
        )}
      >
        {Array.isArray(sizePerPageList) && sizePerPageList?.length > 0 && (
          <div className={classNameSizePerPageList}>
            <small className="flex-shrink-0">Kayıt Sayısı</small>
            <Form.Select className="shadow-none py-2" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
              {sizePerPageList?.map((item, key) => (
                <option key={key} value={item?.value}>
                  {item?.text}
                </option>
              ))}
            </Form.Select>
          </div>
        )}

        {pagination?.totalPages && (
          <Pagination size={size} className={classNamePagination}>
            {firstLastVisible && (
              <Pagination.First
                linkClassName="shadow-none"
                disabled={(page || pagination?.currentPage) == 1}
                onClick={() => setPage(1)}
              />
            )}
            <Pagination.Prev
              linkClassName="shadow-none"
              disabled={(page || pagination?.currentPage) == 1}
              onClick={() => setPage(+(page || pagination?.currentPage) - 1)}
            />
            {pageNumbers({
              currentPage: +(page || pagination?.currentPage),
              totalPages: pagination?.totalPages,
            })}
            <Pagination.Next
              linkClassName="shadow-none"
              disabled={(page || pagination?.currentPage) == pagination?.totalPages}
              onClick={() => setPage(+(page || pagination?.currentPage) + 1)}
            />
            {firstLastVisible && (
              <Pagination.Last
                linkClassName="shadow-none"
                disabled={(page || pagination?.currentPage) == pagination?.totalPages}
                onClick={() => setPage(+pagination?.totalPages)}
              />
            )}
          </Pagination>
        )}
      </div>
    )
  );
};
export default DynaPagination;
